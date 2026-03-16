import React, { useEffect, useRef } from 'react';

const Peptide3DViewer = ({ pdbData, sequence }) => {
    const viewerRef = useRef(null);

    useEffect(() => {
        if (!pdbData || !viewerRef.current || !window.$3Dmol) return;

        // Clear previous viewer if re-rendering
        viewerRef.current.innerHTML = '';

        // Initialize 3Dmol viewer
        let viewer = window.$3Dmol.createViewer(viewerRef.current, {
            backgroundColor: 'white',
            id: `viewer-${sequence}`,
        });

        viewer.addModel(pdbData, 'pdb');

        // Set style: cartoon representation with spectrum coloring based on residue index
        viewer.setStyle({}, { cartoon: { color: 'spectrum' } });

        viewer.zoomTo();
        viewer.render();
        viewer.zoom(0.8, 1000); // slight zoom out animation

        // Cleanup to prevent memory leaks if component unmounts
        return () => {
            if (viewerRef.current) viewerRef.current.innerHTML = '';
            viewer = null;
        };
    }, [pdbData, sequence]);

    return (
        <div className="w-full relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mt-4 bg-white" style={{ height: '300px' }}>
            <div
                ref={viewerRef}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                className="viewer-3d"
            ></div>
            <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
                Drag to rotate • Scroll to zoom
            </div>
        </div>
    );
};

export default Peptide3DViewer;
