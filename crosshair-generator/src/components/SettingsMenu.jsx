import React from 'react'

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
  return (
    <div className="text-sm">
      {Object.keys(settings).map((key) => ( 
        <label key={key}>
        {key}:
          <div >
            <input className='grid' type="range" min={settings[key].min} max={settings[key].max}/>
          </div>
        </label>
      ))}
    </div>
  )
}

export default SettingsMenu
