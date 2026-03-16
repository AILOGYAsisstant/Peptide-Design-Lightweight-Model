import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import SelectInput from '../components/SelectInput';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import MetricDisplay from '../components/MetricDisplay';
import { getTrainingHistory } from '../api/peptides';

const Training = () => {
  const { t } = useTranslation();
  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      setIsLoading(true);
      try {
        const data = await getTrainingHistory();
        setHistoryData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to load training history", err);
        setError(t('training.errLoad'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [t]);

  // Compute final metrics if data exists
  const finalEpoch = historyData.length > 0 ? historyData[historyData.length - 1] : null;
  const currentEpoch = finalEpoch ? finalEpoch.epoch : 0;
  const totalEpochs = historyData.length > 0 ? historyData[historyData.length - 1].epoch : 500;
  const progress = 100; // Assuming the loaded log is from a completed run

  // Generate simulated console logs from the history data
  const logs = historyData.map(
    (h) => `[TRAIN] Epoch ${h.epoch} - G Loss: ${h.g_loss.toFixed(4)}, Val G Loss: ${h.val_g_loss.toFixed(4)}, Entropy: ${h.entropy.toFixed(3)}`
  );

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <PageTitle>{t('training.title')}</PageTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Card>
              <h2 className="text-xl font-bold tracking-tight mb-5">{t('training.configTitle')}</h2>
              <div className="flex flex-col gap-4">
                <SelectInput label={t('training.arch')} options={['Lightweight GTr', 'GATv2', 'Transformer-M']} />
                <SelectInput label={t('training.dataset')} options={['BioPDB v1.2', 'Custom Dataset Alpha', 'PeptideNet Benchmark']} />
              </div>
              <div className="border-t border-border-light dark:border-border-dark my-6"></div>
              <h3 className="text-base font-semibold mb-4">{t('training.hyperTitle')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <TextInput label={t('training.lr')} type="text" defaultValue="0.001" />
                </div>
                <div className="col-span-1">
                  <TextInput label={t('training.bs')} type="number" defaultValue="64" />
                </div>
                <div className="flex flex-col col-span-2">
                  <div className="flex justify-between items-center pb-2">
                    <p className="text-sm font-medium">{t('training.epochs')}</p>
                    <span className="text-sm font-semibold text-primary">{totalEpochs}</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border-light dark:border-border-dark my-6"></div>
              <div className="flex gap-3">
                <Button disabled={true}>
                  <span className="material-symbols-outlined">analytics</span>
                  {t('training.btnHis')}
                </Button>
              </div>
            </Card>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Card>
              <h2 className="text-xl font-bold tracking-tight mb-4">{t('training.progTitle')}</h2>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative inline-flex items-center justify-center size-12">
                    <svg className="size-full" height="36" viewBox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
                      <circle className="stroke-current text-slate-200 dark:text-slate-700" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
                      <circle
                        className="stroke-current text-primary" cx="18" cy="18" fill="none" r="16"
                        strokeDasharray="100" strokeDashoffset={100 - progress} strokeLinecap="round" strokeWidth="3"
                      ></circle>
                    </svg>
                    <span className="absolute text-sm font-semibold">{`${Math.round(progress)}%`}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{`${t('training.epochLabel')} ${currentEpoch}/${totalEpochs}`}</p>
                    <p className="text-sm text-text-light/70 dark:text-text-dark/70">{t('training.statusConfig')}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
                <MetricDisplay label={t('training.mGLoss')} value={finalEpoch ? finalEpoch.g_loss.toFixed(3) : '-'} />
                <MetricDisplay label={t('training.mValGLoss')} value={finalEpoch ? finalEpoch.val_g_loss.toFixed(3) : '-'} />
                <MetricDisplay label={t('training.mEntropy')} value={finalEpoch ? finalEpoch.entropy.toFixed(3) : '-'} />
                <MetricDisplay label={t('training.mGap')} value={finalEpoch ? (finalEpoch.val_d_loss - finalEpoch.val_g_loss).toFixed(2) : '-'} />
              </div>
            </Card>
            <Card className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold tracking-tight">{t('training.chartTitle')}</h2>
              </div>
              {isLoading ? (
                <div className="h-64 flex items-center justify-center text-text-light/50 dark:text-text-dark/50">
                  {t('training.loading')}
                </div>
              ) : error ? (
                <div className="h-64 flex items-center justify-center text-red-500">{error}</div>
              ) : (
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={historyData}
                      margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                      <XAxis
                        dataKey="epoch"
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        tick={{ fill: '#64748b', fontSize: 12 }}
                        tickLine={false}
                        axisLine={false}
                        domain={['auto', 'auto']}
                      />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                        itemStyle={{ color: '#e2e8f0' }}
                      />
                      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                      <Line type="monotone" name="G Loss" dataKey="g_loss" stroke="#0ea5e9" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                      <Line type="monotone" name="Val G Loss" dataKey="val_g_loss" stroke="#22d3ee" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
            </Card>
          </div>
          <div className="lg:col-span-3">
            <Card>
              <div className="p-6 border-b border-border-light dark:border-border-dark">
                <h2 className="text-xl font-bold tracking-tight">{t('training.conTitle')}</h2>
              </div>
              <div className="p-6 bg-surface-dark/40 dark:bg-background-dark/80 rounded-b-xl h-64 overflow-y-auto">
                <pre className="text-sm font-mono text-text-light/90 dark:text-text-dark/90 whitespace-pre-wrap">
                  <code className="language-bash">{logs.join('\n')}</code>
                </pre>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;
