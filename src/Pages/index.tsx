import { Graph, Addon, Shape } from "@antv/x6";
import React from "react";
import "./index.css";
import Toolbar from "./Components/ToolBar/index";
import CalRingComplexity from "../Methods/CalRingComplexity/index";
import "antd/dist/antd.css";
import Canvas from "./Graph/Canvas";
import Stencil from "./Graph/Stencil";
import Event from "./Graph/Event";
import Keyboard from "./Graph/Keyboard";
export default class app extends React.Component {
  componentDidMount() {
    this.graph = Canvas.init(this.container);
    Stencil.init(this.stencilContainer, this.graph);
    Event.init(this.graph);
    Keyboard.init(this.graph);
    // this.initKeyboard();
  }
  refContainer = (container: HTMLDivElement) => {
    this.container = container;
  };
  refStencil = (container: HTMLDivElement) => {
    this.stencilContainer = container;
  };
  render() {
    // TestGraph.init();
    return (
      <div>
        <div className="others">
          <div style={{ width: 150 }}>Ring Complexity:</div>
          <div style={{ width: 200 }}>
            <CalRingComplexity />
          </div>
        </div>
        <div className="toolbar">
          <Toolbar />
        </div>
        <div className="app" style={{ padding: 0 }}>
          <div className="app-stencil" ref={this.refStencil} />
          <div className="app-canvas" ref={this.refContainer} />
        </div>
      </div>
    );
  }
}
