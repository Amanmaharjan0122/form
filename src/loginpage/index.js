import React from 'react'

const Index = () => {
  return (
    <div className="loginmainpage">
      <div className="heading">login</div>
      <input className="inputid" type="text" placeholder="user name " />
      <input className="inputpassword" type="password" placeholder="password" />

      <div className="maincheck">
        <div className="checkdiv">
          <input type="checkbox" value=""></input>
          <h4>remember me</h4>
        </div>
        <div className="forget">
          <h4>forget me?</h4>
        </div>
      </div>

      <button className="btn">Login</button>
    </div>
  )
}

export default Index
