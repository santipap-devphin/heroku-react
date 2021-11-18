import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const Maintenance = () => {
  let history = useHistory();
  return (
    <section id="maintenance" className="maintenance-page">
      <div className="container-fluid">
        <div className="row vh-100 full-height-vh">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-12 text-center">
                <img 
                  src="https://pixinvent.com/apex-angular-4-bootstrap-admin-template/demo-1/assets/img/gallery/maintenance.png"
                  alt=""
                  height={300}
                  width={300}
                  className="img-fluid maintenance-img mt-2" 
                />
                <h1 className="mt-4">Under Maintenance!</h1>
                <div className="maintenance-text w-75 mx-auto mt-4">
                  <p>
                    Ice cream caramels lemon drops candy. Cake toffee topping cookie tart wafer gummies. Sweet gummi bears jujubes bonbon gingerbread apple pie marshmallow.
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
  );
}

export default Maintenance;
