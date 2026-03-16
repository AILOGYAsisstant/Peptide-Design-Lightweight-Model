import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from '../components/ScrollAnimation';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      {/* HeroSection */}
      <section className="relative text-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.4) 0%, transparent 60%)'
          }}>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 ring-1 ring-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('home.badge')}
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-text-light dark:text-text-dark bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-primary to-cyan-500 dark:from-white dark:via-cyan-400 dark:to-blue-500 pb-2">
            {t('home.title1')} <br className="hidden md:block" /> {t('home.title2')}
          </h1>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('home.desc')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => navigate('/generation')} className="px-8 h-12 text-lg shadow-lg hover:shadow-cyan-500/25 transition-all">
              <span className="material-symbols-outlined">auto_awesome</span>
              {t('home.btnGen')}
            </Button>
            <Button onClick={() => navigate('/documentation')} variant="secondary" className="px-8 h-12 text-lg">
              {t('home.btnAbout')}
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-primary">~1.2s</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('home.statTime')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-primary">&gt;95%</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('home.statHit')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-primary">&lt;40</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('home.statII')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-primary">15k+</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('home.statCurated')}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Core Capabilities */}
      <ScrollAnimation>
        <section className="mt-16 md:mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-light dark:text-text-dark">{t('home.learningTitle')}</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              {t('home.learningDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">insights</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('home.card1Title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('home.card1Desc')}
                </p>
              </div>
            </Card>

            <Card className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">share</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('home.card2Title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('home.card2Desc')}
                </p>
              </div>
            </Card>

            <Card className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">speed</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t('home.card3Title')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('home.card3Desc')}
                </p>
              </div>
            </Card>
          </div>
        </section>
      </ScrollAnimation>

      {/* Workflow Visualization */}
      <ScrollAnimation className="mb-16">
        <section className="mt-20 md:mt-32 p-8 rounded-3xl bg-slate-900 dark:bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <h2 className="text-center text-3xl font-bold tracking-tight text-white mb-12 relative z-10">{t('home.pipelineTitle')}</h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {/* Step 1: Input */}
            <div className="flex-1 flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/20 text-primary-light mb-4 ring-1 ring-primary/30 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <span className="material-symbols-outlined text-3xl">database</span>
              </div>
              <h3 className="text-lg font-bold text-white">{t('home.pipe1')}</h3>
              <p className="mt-2 text-sm text-slate-400">{t('home.pipe1Desc')}</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center text-slate-500">
              <span className="material-symbols-outlined text-4xl">arrow_right_alt</span>
            </div>
            <div className="lg:hidden h-8 w-px bg-slate-700"></div>

            {/* Step 2: Model */}
            <div className="flex-1 flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm scale-105 shadow-xl relative mt-2 mb-2">
              <div className="absolute top-0 right-0 -mt-3 -mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 ring-4 ring-slate-900">
                <span className="material-symbols-outlined text-white text-xs">bolt</span>
              </div>
              <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 text-white mb-4 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <span className="material-symbols-outlined text-4xl">hub</span>
              </div>
              <h3 className="text-lg font-bold text-white">{t('home.pipe2')}</h3>
              <p className="mt-2 text-sm text-slate-300 font-medium">{t('home.pipe2Desc')}</p>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex items-center text-slate-500">
              <span className="material-symbols-outlined text-4xl">arrow_right_alt</span>
            </div>
            <div className="lg:hidden h-8 w-px bg-slate-700"></div>

            {/* Step 3: Output */}
            <div className="flex-1 flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4 ring-1 ring-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <span className="material-symbols-outlined text-3xl">biotech</span>
              </div>
              <h3 className="text-lg font-bold text-white">{t('home.pipe3')}</h3>
              <p className="mt-2 text-sm text-slate-400">{t('home.pipe3Desc')}</p>
            </div>
          </div>
        </section>
        {/* Pre Footer CTA */}
        <section className="mt-24 mb-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t('home.readyTitle')}</h2>
          <Button onClick={() => navigate('/datasets')} variant="secondary" className="px-8 mt-4">
            <span className="material-symbols-outlined text-lg">database</span>
            {t('home.btnData')}
          </Button>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Home;
