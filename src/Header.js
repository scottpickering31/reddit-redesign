import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <ul>
          <li>
            <a href="/r/popular" class="active">Popular</a>
          </li>
          <li>
            <a href="/r/hot">Hot</a>
          </li>
          <li>
            <a href="/r/rising">Rising</a>
          </li>
          <li>
            <a href="/r/controversial">Controversial</a>
          </li>
          <li>
            <a href="/r/Gilded">Gilded</a>
          </li>
        </ul>
      </div>
      <div className="header_right">
        <i className="fas fa-bell"></i>
        <img src="" />
        <div className="header_user">
          <span>Scott Pickering</span>
          <i className="fas fa-caret-down" id="arrow"></i>
        </div>
      </div>
    </div>
  );
}
