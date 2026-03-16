import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import Peptide3DViewer from './Peptide3DViewer';
import { foldPeptide } from '../api/peptides';

const PeptideResultCard = ({ peptide, index }) => {
  const [isFolding, setIsFolding] = useState(false);
  const [pdbData, setPdbData] = useState(null);
  const [show3D, setShow3D] = useState(false);
  const [foldError, setFoldError] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(peptide.sequence);
  };

  const handleFold = async () => {
    if (pdbData) {
      setShow3D(!show3D);
      return;
    }

    setIsFolding(true);
    setFoldError(null);
    try {
      const pdbString = await foldPeptide(peptide.sequence);
      setPdbData(pdbString);
      setShow3D(true);
    } catch (err) {
      setFoldError("Failed to generate 3D structure. Please try again.");
    } finally {
      setIsFolding(false);
    }
  };

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.07)' }}
      className="flex flex-col gap-5 p-5 rounded-xl bg-card-light dark:bg-card-dark backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-lg shadow-gray-500/5 dark:shadow-black/20"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wider text-subtext-light dark:text-subtext-dark">Sequence</p>
        <p className="font-mono text-lg font-medium tracking-wider">{peptide.sequence}</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-baseline">
          <p className="text-sm font-medium text-subtext-light dark:text-subtext-dark">Stability Score</p>
          <p className="text-2xl font-bold text-accent-teal">{peptide.stability}</p>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-accent-teal h-2 rounded-full" style={{ width: `${peptide.stability * 100}%` }}></div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Button variant="secondary" className="flex-1" onClick={handleCopy}>
          <span className="material-symbols-outlined text-base">content_copy</span>
          Copy
        </Button>
        <Button
          variant="secondary"
          className="flex-1 bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20"
          onClick={handleFold}
          disabled={isFolding}
        >
          {isFolding ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin material-symbols-outlined text-base">progress_activity</span>
              Folding...
            </span>
          ) : show3D ? "Hide 3D View" : "View 3D Structure"}
        </Button>
      </div>

      <AnimatePresence>
        {foldError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-red-500 text-sm mt-2"
          >
            {foldError}
          </motion.div>
        )}

        {show3D && pdbData && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full mt-2"
          >
            <Peptide3DViewer pdbData={pdbData} sequence={peptide.sequence} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PeptideResultCard;
