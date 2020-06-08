export enum Commands {
  openReaderWebView = 'z-reader.local.openReaderWebView',
  localRefresh = 'z-reader.command.refresh',
  openLocalDirectory = 'z-reader.command.openLocalDirectory',
  searchOnline = 'z-reader.command.searchOnline',
  editTemplateHtml = 'z-reader.editTemplateHtml',
  editTemplateCss = 'ez-reader.ditTemplateCss',
  goProgress = 'z-reader.goProgress',
  progressUpdate = 'z-reader.progress:update',
  setOnlineSite = 'z-reader.command.setOnlineSite',
  setEncoding = 'z-reader.command.setEncoding'
}

export enum WebViewMessage {
  editStyle = 'editStyle',
  editHtml = 'editHtml',
  goProgress = 'goProgress',
  progressUpdate = 'progress:update'
}

export enum TemplatePath {
  templateCss = '\\static\\template\\default\\style.css',
  templateHtml = '\\static\\template\\default\\index.html'
}

export const TREEVIEW_ID = 'local';