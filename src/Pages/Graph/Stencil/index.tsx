import { Addon } from "@antv/x6";
export default class Stencil {
  private static stencil: Addon.Stencil;

  public static init(stencilContainer, graph) {
    this.stencil = new Addon.Stencil({
      title: "Components",
      target: graph,
      search(cell, keyword) {
        return cell.shape.indexOf(keyword) !== -1;
      },
      placeholder: "Search by shape name",
      notFoundText: "Not Found",
      collapsable: true,
      stencilGraphWidth: 250,
      stencilGraphHeight: 300,
      groups: [
        {
          name: "group1",
          title: "Group(Collapsable)"
        }
      ]
    });

    if (stencilContainer) {
      stencilContainer.appendChild(this.stencil.container);
    }
    this.addShape(graph);
  }

  private static addShape(graph) {
    const machine = graph.createNode({
      shape: "Machine",
      attrs: {
        text: { text: "Machine" }
      }
    });
    const designDomain = graph.createNode({
      shape: "DesignDomain",
      attrs: {
        text: { text: "Design" }
      }
    });
    const requirement = graph.createNode({
      shape: "Requirement",
      attrs: {
        text: { text: "Requirement" }
      }
    });
    const givenDomain = graph.createNode({
      shape: "GivenDomain",
      attrs: {
        text: { text: "GivenDomain" }
      }
    });
    const entity = graph.createNode({
      shape: "Entity",
      attrs: {
        text: { text: "Entity" }
      }
    });

    this.stencil.load(
      [machine, designDomain, givenDomain, entity, requirement],
      "group1"
    );
  }
}
