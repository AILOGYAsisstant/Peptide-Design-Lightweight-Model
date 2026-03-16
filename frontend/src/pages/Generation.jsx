import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import PeptideResultCard from '../components/PeptideResultCard';
import { generatePeptides } from '../api/peptides';

const Generation = () => {
  const { t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPeptides, setGeneratedPeptides] = useState([]);

  // Model Parameters
  const [numSequences, setNumSequences] = useState(6);
  const [minLength, setMinLength] = useState(10);
  const [maxLength, setMaxLength] = useState(50);
  const [temperature, setTemperature] = useState(1.0);
  const [useFilter, setUseFilter] = useState(true);
  const [stabilityThreshold, setStabilityThreshold] = useState(40.0);
  const [oversample, setOversample] = useState(3);
  const [seed, setSeed] = useState("");

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedPeptides([]);

    try {
      const payload = {
        num_sequences: parseInt(numSequences) || 6,
        temperature: parseFloat(temperature) || 1.0,
        min_length: parseInt(minLength) || 5,
        max_length: parseInt(maxLength) || 50,
        stable_only: useFilter,
        stability_threshold: parseFloat(stabilityThreshold) || 40.0,
        oversample: parseInt(oversample) || 3,
        seed: seed.trim() !== "" ? parseInt(seed) : null
      };

      const peptides = await generatePeptides(payload);
      setGeneratedPeptides(peptides);
    } catch (error) {
      console.error("Error generating peptides:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full">
        {/* Left Column: Control Panel */}
        <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black tracking-[-0.033em]">{t('generation.title')}</h1>
            <p className="text-base font-normal leading-normal text-subtext-light dark:text-subtext-dark">{t('generation.desc')}</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-[-0.015em] border-b border-border-light dark:border-border-dark pb-3">{t('generation.paramTitle')}</h2>

            <TextInput
              label={t('generation.numSeq')}
              type="number"
              placeholder="e.g., 6"
              value={numSequences}
              onChange={(e) => setNumSequences(e.target.value)}
            />

            <div className="grid grid-cols-2 gap-4">
              <TextInput
                label={t('generation.minLen')}
                type="number"
                placeholder="e.g., 10"
                value={minLength}
                onChange={(e) => setMinLength(e.target.value)}
              />
              <TextInput
                label={t('generation.maxLen')}
                type="number"
                placeholder="e.g., 50"
                value={maxLength}
                onChange={(e) => setMaxLength(e.target.value)}
              />
            </div>

            <TextInput
              label={t('generation.temp')}
              type="number"
              step="0.1"
              placeholder="e.g., 1.0"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />

            <TextInput
              label={t('generation.seed')}
              type="number"
              placeholder="e.g., 42"
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
            />

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium" htmlFor="stability-filter">{t('generation.filterLabel')}</label>
                <span className="material-symbols-outlined text-base text-subtext-light dark:text-subtext-dark cursor-help" title="Only return peptides with a predicted stability index below threshold.">help</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  checked={useFilter}
                  onChange={(e) => setUseFilter(e.target.checked)}
                  className="sr-only peer"
                  id="stability-filter"
                  type="checkbox"
                />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </div>

            {useFilter && (
              <div className="grid grid-cols-2 gap-4 p-4 rounded-md bg-black/5 dark:bg-white/5">
                <TextInput
                  label={t('generation.iiThresh')}
                  type="number"
                  step="0.1"
                  placeholder="e.g., 40.0"
                  value={stabilityThreshold}
                  onChange={(e) => setStabilityThreshold(e.target.value)}
                />
                <TextInput
                  label={t('generation.os')}
                  type="number"
                  placeholder="e.g., 3"
                  value={oversample}
                  onChange={(e) => setOversample(e.target.value)}
                />
              </div>
            )}

            <div className="pt-4 border-t border-border-light dark:border-border-dark">
              <Button onClick={handleGenerate} disabled={isGenerating} className="w-full">
                <span className="material-symbols-outlined">auto_awesome</span>
                {isGenerating ? t('generation.btnGenProg') : t('generation.btnGen')}
              </Button>
            </div>
            {isGenerating && (
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-primary/10 dark:bg-primary/20">
                <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="text-sm font-medium text-primary">{t('generation.progText')}</p>
              </div>
            )}
          </div>
        </aside>
        {/* Right Column: Results Area */}
        <section className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <h2 className="text-2xl font-bold tracking-[-0.015em]">{t('generation.resTitle')}</h2>
            <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
              {generatedPeptides.length > 0 ? t('generation.showing', { count: generatedPeptides.length }) : ''}
            </p>
          </div>
          <div className="grid grid-cols-1 @container md:grid-cols-2 xl:grid-cols-3 gap-6">
            {generatedPeptides.length > 0 ? (
              generatedPeptides.map((peptide, index) => (
                <PeptideResultCard key={index} peptide={peptide} index={index} />
              ))
            ) : (
              <div className="lg:col-span-3 flex-1 flex flex-col items-center justify-center text-center p-10 border-2 border-dashed border-border-light dark:border-border-dark rounded-xl">
                <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark opacity-50">science</span>
                <h3 className="text-xl font-bold mt-4">{t('generation.noResTitle')}</h3>
                <p className="text-subtext-light dark:text-subtext-dark mt-2 max-w-sm">{t('generation.noResDesc')}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Generation;
