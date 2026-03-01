// const mockPeptides = [
//   {
//     sequence: 'ACDEFGHIK',
//     stability: 0.92,
//   },
//   {
//     sequence: 'LMNPQRSTV',
//     stability: 0.88,
//   },
//   {
//     sequence: 'WYACDEFGH',
//     stability: 0.85,
//   },
// ];

export const generatePeptides = async (params = {}) => {
  try {
    const response = await fetch('http://localhost:8000/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // returning the json list parsed directly from FastAPI
  } catch (error) {
    console.error('Failed to fetch generated peptides:', error);
    // Fallback error format matching backend response schema
    return [
      { sequence: 'ERROR_FETCH', stability: 0.0, validity: 'Error', length: 0 }
    ];
  }
};
