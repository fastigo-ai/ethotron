import React from "react";
import { testSolutionsData } from "../Data/testSolutionData";

const TestSolutionsTable = () => {
  const { columns, partners, products } = testSolutionsData;

  return (
    <div className="overflow-auto border rounded-lg shadow text-sm ">
      <table className="min-w-full table-fixed border-collapse mt-2">
        <thead>
          <tr>
            <th className="bg-yellow-300 border px-4 py-2 w-40">Test Solutions</th>
            {columns.map((col, i) => (
              <th key={i} className="bg-cyan-100 border px-4 py-2 text-center">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* PARTNERS SECTION */}
          <tr>
            <td className="bg-yellow-300 font-bold border px-2 py-1" rowSpan={partners.length + 1}>PARTNERS</td>
          </tr>
          {partners.map((row, i) => (
            <tr key={`partner-${i}`}>
              {row.map((item, j) => (
                <td key={j} className="border px-2 py-1">{item}</td>
              ))}
            </tr>
          ))}

          {/* PRODUCTS SECTION */}
          <tr>
            <td className="bg-yellow-300 font-bold border px-2 py-1" rowSpan={products.length + 1}>Products</td>
          </tr>
          {products.map((row, i) => (
            <tr key={`product-${i}`}>
              <td className="border px-2 py-1 font-medium">{row.name}</td>
              {row.items.map((item, j) => (
                <td key={j} className="border px-2 py-1 text-center">{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestSolutionsTable;



// import React from 'react';

// const testSolutionTable = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      
//       {/* Test Solutions */}
//       <div className="shadow-md p-6 bg-white rounded-2xl">
//         <h2 className="text-xl font-bold mb-4 border-b pb-2">Test Solutions</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm sm:text-base">
//           <p>EMC / EMI / RF Test Solution</p>
//           <p>Power Electronics</p>
//           <p>EV-Electric Vehicle</p>
//           <p>Battery Test Solution</p>
//           <p>Motor Test Solution</p>
//           <p>LED Test Solution</p>
//           <p>Passive Component Test Solution</p>
//           <p>Electrical Safety Test Solution</p>
//           <p>Inverter Test Solution</p>
//         </div>
//       </div>

//       {/* Partners */}
//       <div className="shadow-md p-6 bg-white rounded-2xl">
//         <h2 className="text-xl font-bold mb-4 border-b pb-2">Partners</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 text-sm sm:text-base">
//           <p>Haefely</p>
//           <p>Hioki</p>
//           <p>Nebula</p>
//           <p>Laplace</p>
//           <p>Elektro Automatik</p>
//           <p>EEC Extech</p>
//           <p>Lumiloop</p>
//           <p>Tonghui</p>
//           <p>Aaronia</p>
//           <p>Flir</p>
//         </div>
//       </div>

//       {/* Products */}
//       <div className="shadow-md p-6 bg-white rounded-2xl">
//         <h2 className="text-xl font-bold mb-4 border-b pb-2">Products</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm sm:text-base max-h-[400px] overflow-y-auto">
//           <p>Surge Generator</p>
//           <p>Power Meter</p>
//           <p>Data Loggers</p>
//           <p>Battery Working Condition Simulation Tester</p>
//           <p>Impulse Winding Tester</p>
//           <p>Power Analyzer</p>
//           <p>LCR Meter</p>
//           <p>Leakage Current Tester</p>
//           <p>Impedance Analyzer</p>
//           <p>Insulation Tester</p>
//           <p>Clamp Meter</p>
//           <p>Battery Cell Voltage & Temp Acquisition System</p>
//           <p>Programmable DC Power Supply</p>
//           <p>DC Electronic Load</p>
//           <p>Programmable AC Power Supply</p>
//           <p>Safety/Hi-Pot Testers</p>
//           <p>RF Power Amplifier</p>
//           <p>Thermal Camera</p>
//           <p>AC Power Source</p>
//           <p>Signal Generators</p>
//           <p>Spectrum Analyzers</p>
//           <p>Antennas</p>
//           <p>Preamps</p>
//           <p>Shielding Materials</p>
//           <p>Gonio Meter</p>
//           {/* Add more here as needed */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default testSolutionTable;

