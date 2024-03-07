import React from 'react';
import './index.css';

function Supersellers() {
  return (
    <div className="container-fluid p-5">
      <div className='row mb-4 ps-md-5 ps-lg-0'>
        <h2 className='display-5 color-2 fw-bold'>Supersellers</h2>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-5">
        <div className="col py-3">
          <div className="card supersellers-height rounded-3 border border-3 border-dark bg-color-3">
            <div className="card-header border-bottom border-3 border-dark p-4">
              <img src="https://github.com/abbyedxcmk/pizzabackend/blob/main/client/src/assets/pizza-images/03.png?raw=true" className='img-fluid mx-auto d-block mb-3' alt=""></img>
            </div>
            <div className="card-body p-4 pb-2 bg-color-1">
              <h2 className="supersellers-h2 display-3 fw-bold text-white w-100 py-3">DIAVOLA</h2>
            </div>
          </div>
        </div>

        <div className="col py-3">
          <div className="card supersellers-height rounded-3 border border-3 border-dark">
            <div className="card-header border-bottom border-3 border-dark p-4">
              <img src="https://github.com/abbyedxcmk/pizzabackend/blob/main/client/src/assets/pizza-images/01.png?raw=true" className='img-fluid mx-auto d-block mb-3' alt=""></img>
            </div>
            <div className="card-body p-4 pb-2 bg-color-1">
              <h2 className="supersellers-h2 display-3 fw-bold text-white w-100 py-3">MARGHERITA</h2>
            </div>
          </div>
        </div>

        <div className="col py-3">
          <div className="card supersellers-height rounded-3 border border-3 border-dark bg-color-2">
            <div className="card-header border-bottom border-3 border-dark p-4">
              <img src="https://github.com/abbyedxcmk/pizzabackend/blob/main/client/src/assets/pizza-images/05.png?raw=true" className='img-fluid mx-auto d-block mb-3' alt=""></img>
            </div>
            <div className="card-body p-4 pb-2 bg-color-1">
              <h2 className="supersellers-h2 display-3 fw-bold text-white w-100 py-3">CAPRICCIOSA</h2>
            </div>
            <div id="Menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supersellers;


