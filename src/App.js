import "./App.css";

function App() {
  return (
    <>
      <div className="custom-container c">
        <div className="row cd">
          <div className="col-md-7 leftSide">
          <div class="content">
  <div class="circle">
  </div>
  <div class="circle1">
  </div>
</div>
            <div className="con">
              <h4>Milkano</h4>
              <p>The most popular grocery app</p>
            </div>
          </div>
          <div className="col-md-5" style={{}}>
            <div className="login-form" style={{height:'100%', display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }} >
              <div>
                <h3 style={{fontWeight:'bold'}}>Welcome to Milkano</h3>
                <h6>Welcome Back</h6>
                <form>
                  <div class="form-group mb-0 mt-3 w-100">
                   <i class="fa fa-envelope-o icon" style={{fontSize:'15px', color: 'grey'}}></i> 
                 
                    <input
                      type="email"
                      class="form-control rounded-pill"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      style={{padding:'10px 0px 10px 40px'}}
                    />
                    <div id="emailHelp" class="form-text text-muted"></div>
                  </div>
                  <div class="form-group mb-3 w-100">
                  <i class="fa fa-lock icon" aria-hidden="true" style={{fontSize:'20px', color: 'grey'}}></i>
    
                    <input
                      type="password"
                      class="form-control rounded-pill"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      style={{padding:'9px 0px 10px 40px'}}
                    />
                  </div>
                  <div>
                    <div class="mb-3">
                      <label for="male" class="form-label" style={{fontWeight:'bold'}}>
                        Select
                      </label>
                      <div style={{display:'flex'}}>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                        />
                        <label class="form-check-label" for="male" style={{fontWeight:'bold'}}>
                        B2B
                        </label>
                      </div>
                      <div class="form-check" style={{marginLeft:'33px'}}>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                        />
                        <label class="form-check-label" for="female" style={{fontWeight:'bold'}}>
                         B2C
                        </label>
                      </div>
                      </div>
                    </div>
                   </div>
                  <button type="submit" className="btn btn-primary w-100 rounded-pill p-2">
                    Login
                  </button>
                  <div className="text-center mt-2" style={{fontSize:'13px', color:'lightgray'}}>
                    <span>Forget Password</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
