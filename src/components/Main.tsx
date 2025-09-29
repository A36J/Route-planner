export default function Main(){
    return(
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 space-y-6">
            
            {/* Territories Dropdown */}
            <div>
              <label 
                htmlFor="territory-select" 
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Territory
              </label>
              <select 
                id="territory-select" 
                name="territories"
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              >
                <option>-- Please choose a territory --</option>
                <option value="placeholder1">Territory A</option>
                <option value="placeholder2">Territory B</option>
                <option value="placeholder3">Territory C</option>
                <option value="placeholder4">Territory D</option>
              </select>
            </div>
            
            {/* Productivity Ratio Input */}
            <div>
              <label 
                htmlFor="productivity-ratio" 
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Productivity Ratio
              </label>
              <input 
                type="number" 
                id="productivity-ratio"
                placeholder="e.g., 1.25"
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            {/* Average Revenue Input */}
            <div>
              <label 
                htmlFor="average-revenue"
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Average Revenue
              </label>
              <input 
                type="number" 
                id="average-revenue"
                placeholder="e.g., 5000"
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            {/* Generate Button */}
            <button 
              type="button" 
              className="w-full text-white bg-violet-500/80 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-violet-300 font-bold rounded-lg text-md px-5 py-3 text-center transition-colors duration-300"
            >
              Generate
            </button>

          </div>
        </main>
    )
}