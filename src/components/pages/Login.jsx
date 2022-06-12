import React from 'react'

function Login() {
  return (
    <section class="py-5">
    <div class="container">
          <div class="row">
                <div class="col-lg-5 mx-auto">
                      <div class="card">
                            <div class="card-body">
                                  <h5 class="text-center">Login to Cinetickets</h5>
                                  <hr/>
                                  <form action="">
                                        <div class="my-2">
                                              <label for="email">Email</label>
                                              <input type="text" name="email" class="form-control"/>
                                        </div>
                                        <div class="my-2">
                                              <label for="email">Password</label>
                                              <input type="text" name="Password" class="form-control"/>
                                        </div>
                                        <div class="my-3">
                                              <input type="submit"  class="btn btn-danger w-100"/>
                                        </div>
                                  </form>
                                  <hr/>
                                  <a href=""  class="btn btn-outline-danger w-100">Guest login</a>
                            </div>
                      </div>
                </div>
          </div>
    </div>
</section>
  )
}

export default Login