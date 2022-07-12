import React, { Component } from "react";

const Footer = () => {
	return (
		<footer className="fixFooter py-2 text-left ">
			{/* <div className="row">
        <div className="col">
          <p><i className="fa-solid fa-user mx-3"></i> Thang Truong</p>
          <p ><i className="fa-solid fa-envelope mx-3"></i> <a className='text-dark' href="mailto:thang.truong.swin@gmail.com">thang.truong.swin@gmail.com</a></p>
        </div>
        <div className='col' >
          <p><i className="fa-solid fa-check me-3"></i>Shopping Cart written by ReactJS</p>
          <p><i className="fa-solid fa-check me-3"></i>Dynamic value and Layout</p>
        </div>
         <div className='col' >
          <p><i className="fa-solid fa-check me-3"></i>Load data from JS file</p>
          <p><i className="fa-solid fa-check me-3"></i>Fullfilled CRUD Operation</p>
         </div>
      </div> */}
			<div>
				<p>
					<i className="fa-solid fa-user me-3"></i> Thang Truong
				</p>
				<p>
					<i className="fa-solid fa-envelope me-3"></i>{" "}
					<a className="text-dark" href="mailto:thang.truong.swin@gmail.com">
						thang.truong.swin@gmail.com
					</a>
				</p>
			</div>
			<div>
				<p>
					<i className="fa-solid fa-check me-3"></i>Shopping Cart written by
					ReactJS
				</p>
				<p>
					<i className="fa-solid fa-check me-3"></i>Dynamic value and Layout
				</p>
			</div>
			<div>
				<p>
					<i className="fa-solid fa-check me-3"></i>Load data from JS file
				</p>
				<p>
					<i className="fa-solid fa-check me-3"></i>Fullfilled CRUD Operation
				</p>
			</div>
		</footer>
	);
};

export default Footer;
