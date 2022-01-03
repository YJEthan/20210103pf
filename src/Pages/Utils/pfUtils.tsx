function downloadFile(data, type, filename) {
  const blob = new Blob([data], { type });
  let link = document.createElement("a");
  if (link.download !== undefined) {
    let url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
export function exportJSON(graph, createFile = true) {
  let data1 = graph.toJSON();
  debugger;
  let data = JSON.stringify(data1);
  debugger;
  const name = "machine";
  if (createFile) {
    downloadFile(data, "application/xml;charset=utf-8;", `${name}.json`);
  }
}
export function uploadJSON(file) {
  let reader = new FileReader();
  debugger;
  reader.readAsText(file.raw);
  reader.onload = (e) => {
    // 读取文件内容
    var cont = e.target.result;
    console.log(cont);
    return JSON.parse(cont);
    // 接下来可对文件内容进行处理
  };
}
