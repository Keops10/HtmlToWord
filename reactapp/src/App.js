import React, { Component } from "react";
import HttpService from "./services/HttpService.js";
import { saveAs } from "file-saver";
import "./theme.css";

export const HtmlToWord = async function (veri) {
  const response = await HttpService.getAxiosClient().post(
    "api/HtmlToWord/PostHtmlToWord",
    veri,
    { responseType: "blob" }
  );
  return response;
};

const wordaktarim = () => {
  const gonderVeri = {
    Program_Adi: "string",
    Sirket_Adi: "string",
    Baslik: "string",
    Konu: "string",
    Kategoriler: "string",
    Etiketler: "string",
    Aciklamalar: "string",
    Durum: "string",
    Belgeyi_Olusturan: "string",
    En_Son_Belgeyi_Duzenleyen: "string",
    Sayfa_Yonu: "Dikey",
    Sayfa_Ust_Kenar_Boslugu: 2,
    Sayfa_Alt_Kenar_Boslugu: 4,
    Sayfa_Sag_Kenar_Boslugu: 2.2,
    Sayfa_Sol_Kenar_Boslugu: 3,
    Belge_Icerigi:
      '<html><body> <h2>\r\n        <img src="images/widgets/HtmlEditor.svg" alt="HtmlEditor">\r\n        Formatted Text Editor (HTML Editor)\r\n    </h2>\r\n    <br>\r\n    <p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>\r\n    <p>Supported features:</p>\r\n    <ul>\r\n        <li>Inline formats:\r\n            <ul>\r\n                <li><strong>Bold</strong>, <em>italic</em>, <s>strikethrough</s> text formatting</li>\r\n                <li>Font, size, color changes (HTML only)</li>\r\n            </ul>\r\n        </li>\r\n        <li>Block formats:\r\n            <ul>\r\n                <li>Headers</li>\r\n                <li>Text alignment</li>\r\n                <li>Lists (ordered and unordered)</li>\r\n                <li>Code blocks</li>\r\n                <li>Quotes</li>\r\n            </ul>\r\n        </li>\r\n        <li>Custom formats</li>\r\n        <li>HTML and Markdown support</li>\r\n        <li>Mail-merge placeholders (for example, %username%)</li>\r\n        <li>Adaptive toolbar for working images, links, and color formats</li>\r\n        <li>Image upload: drag-and-drop images onto the form, select files from the file system, or specify a URL.</li>\r\n        <li>Copy-paste rich content (unsupported formats are removed)</li>\r\n        <li>Tables support</li>\r\n    </ul>\r\n    <br>\r\n    <p>Supported frameworks and libraries</p>\r\n    <table>\r\n        <tr>\r\n            <td><strong>jQuery</strong></td>\r\n            <td style="text-align: right;">v2.1 - v2.2 and v3.x</td>\r\n        </tr>\r\n        <tr>\r\n            <td><strong>Angular</strong></td>\r\n            <td style="text-align: right;">v7.0+</td>\r\n        </tr>\r\n        <tr>\r\n            <td><strong>React</strong></td>\r\n            <td style="text-align: right;">v16.2+</td>\r\n        </tr>\r\n        <tr>\r\n            <td><strong>Vue</strong></td>\r\n            <td style="text-align: right;">v2.6.3+</td>\r\n        </tr>\r\n    </table></body></html>',
  };

  HtmlToWord([gonderVeri]).then((res) => {
    let dokuman = new Blob([res?.data]);
    saveAs(dokuman, "asd.docx");
  });
};

export default class App extends Component {
  render() {
    return (
      <div>
        <button
          className="p-button p-button-info"
          style={{ margin: 100 }}
          onClick={wordaktarim}
        >
          Word İndir
        </button>
      </div>
    );
  }
}
