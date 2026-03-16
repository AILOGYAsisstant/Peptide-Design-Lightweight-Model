import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Card from '../components/Card';
import MetricCard from '../components/MetricCard';

const Evaluation = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    modelVersion: 0,
    dataset: 0,
    date: 0,
  });

  const modelVersions = ['v1.2', 'v1.1', 'v1.0'];
  const datasets = ['BioPDB', 'Custom Alpha', 'PeptideNet'];
  const dates = ['Latest', 'Last 7 Days', 'Last 30 Days'];

  const handleFilterClick = (filterName) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: (prev[filterName] + 1) % (
        filterName === 'modelVersion' ? modelVersions.length :
          filterName === 'dataset' ? datasets.length : dates.length
      ),
    }));
  };

  const peptideData = [
    { sequence: 'ACDEFGHIKL', stability: 0.95, validity: 'Valid' },
    { sequence: 'MNPQRSTVWY', stability: 0.92, validity: 'Valid' },
    { sequence: 'YVWTSRQPNM', stability: 0.88, validity: 'Valid' },
    { sequence: 'LKIGHFEDCA', stability: 0.98, validity: 'Valid' },
    { sequence: 'GHIJKLMNPQ', stability: 0.85, validity: 'Valid' },
  ];

  return (
    <>
      <div className="layout-content-container flex flex-col flex-1 gap-8">
        <div className="flex flex-wrap justify-between gap-4 items-start">
          <div className="flex min-w-72 flex-col gap-2">
            <p className="text-slate-900 dark:text-slate-50 text-4xl font-black leading-tight tracking-[-0.033em]">{t('evaluation.title')}</p>
            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">{t('evaluation.desc')}</p>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          <Button onClick={() => handleFilterClick('modelVersion')} variant="secondary" className="h-8 shrink-0">
            <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">{t('evaluation.ver')}: {modelVersions[filters.modelVersion]}</p>
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
          </Button>
          <Button onClick={() => handleFilterClick('dataset')} variant="secondary" className="h-8 shrink-0">
            <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">{t('evaluation.data')}: {datasets[filters.dataset]}</p>
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
          </Button>
          <Button onClick={() => handleFilterClick('date')} variant="secondary" className="h-8 shrink-0">
            <p className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">{t('evaluation.date')}: {dates[filters.date]}</p>
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">expand_more</span>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard title={t('evaluation.mVal')} value="98.2%" delta="+1.5%" />
          <MetricCard title={t('evaluation.mStab')} value="0.91" delta="+0.02" />
          <MetricCard title={t('evaluation.mUnique')} value="99.7%" delta="-0.1%" />
          <MetricCard title={t('evaluation.mDiv')} value="0.85" delta="+0.04" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">{t('evaluation.pmTitle')}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{t('evaluation.pmDesc')}</p>
            </div>
            <div className="grid min-h-[240px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3 pt-4">
              <div className="w-full flex flex-col items-center gap-2"><div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-md" style={{ height: '98%' }}></div><p className="text-slate-600 dark:text-slate-400 text-xs font-bold leading-normal tracking-wide uppercase">Validity</p></div>
              <div className="w-full flex flex-col items-center gap-2"><div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-md" style={{ height: '99%' }}></div><p className="text-slate-600 dark:text-slate-400 text-xs font-bold leading-normal tracking-wide uppercase">Uniqueness</p></div>
              <div className="w-full flex flex-col items-center gap-2"><div className="bg-primary/20 dark:bg-primary/30 w-full rounded-t-md" style={{ height: '75%' }}></div><p className="text-slate-600 dark:text-slate-400 text-xs font-bold leading-normal tracking-wide uppercase">Novelty</p></div>
              <div className="w-full flex flex-col items-center gap-2"><div className="bg-primary dark:bg-primary w-full rounded-t-md" style={{ height: '85%' }}></div><p className="text-slate-600 dark:text-slate-400 text-xs font-bold leading-normal tracking-wide uppercase">Diversity</p></div>
            </div>
          </Card>
          <Card className="flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">{t('evaluation.tpTitle')}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{t('evaluation.tpDesc')}</p>
            </div>
            <div className="flex min-h-[240px] flex-1 flex-col gap-4 py-4">
              <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="-3 0 478 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#chart-gradient)"></path>
                <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#137fec" strokeLinecap="round" strokeWidth="3"></path>
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="chart-gradient" x1="236" x2="236" y1="1" y2="149">
                    <stop stopColor="#137fec" stopOpacity="0.2"></stop>
                    <stop offset="1" stopColor="#137fec" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between -mt-4">
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">0</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">20</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">40</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">60</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">80</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold tracking-wide">100</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-2 flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">{t('evaluation.omTitle')}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{t('evaluation.omDesc')}</p>
            </div>
            <div className="flex items-center justify-center flex-1 h-full min-h-[250px]">
              <img alt="A radar chart showing model performance metrics" className="w-full h-full object-contain dark:invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMaDNeplp7QUI0xAzaTsnI_YZbMTApv4jjIuQSYjr0EqPWNQQEkLdzHU5SBEbYZV9WY7wpM2F2EeRyAd2uOcE6U3UR38kQqSNWX-tnxmggGf6U-uwp_U-jYPXCeQmrl_5ilZaNJvuGXcFEZ9v23fN2kMeiTuwaqurB22X8dC-ZPpJ14bI4A8WWGhe_Vi03k1Jvyx06ZdI07FNsh44OMormp6-c2hLENa3RCpvBkVgwRL7isUnraodrLaO8zYMwAICXEmAsgS9Kc2E" />
            </div>
          </Card>
          <Card className="lg:col-span-3 flex-col gap-4">
            <div className="flex flex-col">
              <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">{t('evaluation.sampTitle')}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{t('evaluation.sampDesc')}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3 text-sm font-semibold text-slate-600 dark:text-slate-400">{t('evaluation.colSeq')}</th>
                    <th className="p-3 text-sm font-semibold text-slate-600 dark:text-slate-400">{t('evaluation.colStab')}</th>
                    <th className="p-3 text-sm font-semibold text-slate-600 dark:text-slate-400">{t('evaluation.colVal')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {peptideData.map((peptide, index) => (
                    <tr key={index}>
                      <td className="p-3 text-sm font-mono text-slate-800 dark:text-slate-200">{peptide.sequence}</td>
                      <td className="p-3 text-sm text-slate-600 dark:text-slate-300">{peptide.stability}</td>
                      <td className="p-3 text-sm text-green-600 dark:text-green-500">{peptide.validity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Evaluation;
