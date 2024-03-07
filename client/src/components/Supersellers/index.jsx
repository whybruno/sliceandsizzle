import React from 'react';
import './index.css';

function Supersellers() {
  return (
    <div className="container-fluid p-5" id="custom-cards">
      <div className='row mb-4 ps-md-5 ps-lg-0'>
        <h2 className='display-5 color-2 fw-bold'>Supersellers</h2>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5">
        <div className="col">
          <div className="supersellers bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url('https://github.com/abbyedxcmk/pizzabackend/blob/main/client/src/assets/pizza-images/05.png?raw=true')` }}>
            <div className="d-flex h-100 justify-content-center align-items-center">
              <h2 className="display-3 fw-bold text-white bg-color-2 w-100 py-3">CAPRICCIOSA</h2>
            </div>
          </div>
        </div>

        <div className="col">
          <div className=" h-100 bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url('https://github.com/abbyedxcmk/pizzabackend/blob/main/client/src/assets/pizza-images/05.png?raw=true')` }}>
            <div className="p-5 m-5 text-shadow-1">
              <h2 className="py-5 my-5 display-3 lh-1 fw-bold text-white">CAPRICCIOSA</h2>
            </div>
          </div>
        </div>

        <div className="col">
          <div className=" h-100 bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url('https://github.com/abbyedxcmk/pizzabackend/blob/main/client/src/assets/pizza-images/05.png?raw=true')` }}>
            <div className="p-5 m-5 text-shadow-1">
              <h2 className="py-5 my-5 display-3 lh-1 fw-bold text-white">CAPRICCIOSA</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supersellers;


