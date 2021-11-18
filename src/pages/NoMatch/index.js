import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const NoMatch = () => {
  let history = useHistory();
  return (
    <div className="maintenance-page">
      <section id="error">
        <div className="container-fluid">
          <div className="row vh-100 full-height-vh">
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col-12 text-center">
                  <img
                    src="https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-1/assets/img/gallery/error.png" 
                    alt=""
                    height={300}
                    width={400}
                    className="img-fluid error-img mt-2"
                  />
                  <h1 className="mt-4">404 - Page Not Found!</h1>
                  <div className="w-75 error-text mx-auto mt-4">
                    <p>
                      The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable.
                    </p>
                  </div>
                  <Button
                    className="btn btn-warning h-auto my-2"
                    onClick={() => history.push('/dashboard')}
                  >
                    Back To Dashboard
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NoMatch;
