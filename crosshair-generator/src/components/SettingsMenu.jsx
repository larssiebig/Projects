import React ,{ useState } from 'react'

export const settings = {
    cl_crosshairgap: {
      min:1,
      max:100
    },
    cl_crosshair_outlinethickness: {
      min:0,
      max:3
    },
    cl_crosshaircolor_r: {
      min:0,
      max:255
    },
    cl_crosshaircolor_g: {
      min:0,
      max:255
    },
    cl_crosshaircolor_b: {
      min:0,
      max:255
    },
    cl_crosshairalpha: {
      min:0,
      max:255
    },
    cl_crosshair_dynamic_splitdist: {
      min:7,
      max:7
    },
    cl_fixedcrosshairgap: {
      min:-100,
      max:100
    },
    cl_crosshaircolor: {
      min:1,
      max:5
    },
    cl_crosshair_drawoutline: {
      min:0,
      max:1
    },
    cl_crosshair_dynamic_splitalpha_innermod: {
      min:0,
      max:1
    },
    cl_crosshair_dynamic_splitalpha_outermod: {
      min:0.3,
      max:1
    },
    cl_crosshair_dynamic_maxdist_splitratio: {
      min:0.1,
      max:1
    },
    cl_crosshairthickness: {
      min:0,
      max:100
    },
    cl_crosshairstyle: {
      min:1,
      max:5
    },
    cl_crosshairdot: {
      min:0,
      max:1
    },
    cl_crosshairgap_useweaponvalue: {
      min:0,
      max:1
    },
    cl_crosshairusealpha: {
      min:0,
      max:1
    },
    cl_crosshair_t: {
      min:0,
      max:1
    },
    cl_crosshairsize: {
      min:0,
      max:100
    }
  }

function SettingsMenu() {

  const [style, setStyle] = useState(0)
  const [gap, setGap] = useState(0)
  const [outline, setOutline] = useState(0)

  return (
    <div>
    
    {/* Set Style Radio List */}
      <div>

        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-license" type="radio" value='0'  name="list-radio" onChange={(e)=>setStyle(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default </label>
              </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-license" type="radio" value='1'  name="list-radio" onChange={(e)=>setStyle(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default Static </label>
              </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-id" type="radio" value='2' name="list-radio" onChange={(e)=>setStyle(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Classic</label>
              </div>
          </li>

          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-millitary" type="radio" value='3' name="list-radio" onChange={(e)=>setStyle(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Classic Dynamic</label>
              </div>
          </li>

          <li className="w-full dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-passport" type="radio" value='4' name="list-radio" onChange={(e)=>setStyle(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Classic Static</label>
              </div>
          </li>

          <li className="w-full dark:border-gray-600">
              <div className="flex items-center pl-3">
                  <input id="horizontal-list-radio-passport" type="radio" value='5' name="list-radio" onChange={(e)=>setStyle(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="horizontal-list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Classic Hybrid</label>
              </div>
          </li>
        </ul>
        <div className='text-xl'>Style = {style}</div>
      </div>

      <input type="range" min="-10" max="10" step="1" value={gap} onChange={(e)=>setGap(e.target.value)} />
        <h1>{gap}</h1>
        <input type="range" min="0" max="1" step="1" value={outline} onChange={(e)=>setOutline(e.target.value)} />
        <h1>{outline}</h1>
        

    </div>
    
  )
}

export default SettingsMenu
