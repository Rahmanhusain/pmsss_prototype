import { createWorker } from "tesseract.js";

const OCR = async () => {
  try {
    const worker = await createWorker({
      // Specify the path to the worker script
      workerPath: '/tesseract/worker.js',           // Path to worker script
      corePath: '/tesseract/tesseract-core.wasm.js', // Path to WASM core file
      langPath: '/tesseract/lang/',                 // Path to the language files (optional)
    });
    
    // Load language and initialize worker
    await worker.loadLanguage('eng');
    await worker.reinitialize('eng');
    
    // Recognize text from an image
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    
    console.log(text); // Log recognized text
    
    // Terminate worker after processing
    await worker.terminate();

  } catch (error) {
    console.error("OCR error:", error);
  }
};

export default OCR;
