const getPdfDel = (_url: any, _title: any) => {
  console.log(_url, _title, 'getPdf')

  let file: any = new URL('/assets/pdf/' + _url, import.meta.url).href

  const fileName = _title;  // 重命名的文件名
  const fileUrl = `/assets/pdf/${_url}`;  // 本地文件路径
  console.log(fileUrl, 'fileUrl')
  // 创建隐藏的 <a> 标签
  const link = document.createElement('a');
  // 获取当前 url / 之前的
  const baseUrl = window.location.href.split('/').slice(0, -1).join('/') + '/';
  link.href = baseUrl + fileUrl;
  link.download = fileName;  // 设置文件名

  // 模拟点击事件
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  // fetch(file).then(res => res.blob())
  //   .then(blob => {
  //     downloadFile(blob, _title)
  //   })
  //   .catch(error => {
  //     console.log('下载失败')
  //   })
}
const getPdf = (_url: any, _title: any) => {
  const fileName = _title // 重命名的文件名
  const fileUrl = `https://hkeyecmer.com/pdf/${_url}` // 本地文件路径
  // 创建隐藏的 <a> 标签
  const link = document.createElement('a')
  link.href = fileUrl
  link.download = fileName // 设置文件名
  // 模拟点击事件
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
const downloadFile = (blob: any, filename: any) => {
  console.log(blob, filename, 'downloadFile')
  let url = window.URL.createObjectURL(blob);
  // 创建隐藏的可下载链接
  let link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
}

const newGetPdf = (_url: any) => {
  let newUrl: any = new URL('/assets/pdf/' + _url, import.meta.url).href
  return newUrl
}

export {
  getPdf,
  newGetPdf
}