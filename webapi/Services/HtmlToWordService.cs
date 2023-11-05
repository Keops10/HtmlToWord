using DocumentFormat.OpenXml.Packaging;
using webapi.HtmlToWords;
using webapi.Models;
using webapi.Services;

namespace webapi.Services
{
    public class HtmlToWordService : IHtmlToWordService
    {
        public async Task<MemoryStream> CreateHtmlToWord(HtmlToWordModel model)
        {
            HtmlToWord result = new HtmlToWord();
            MemoryStream mem = new MemoryStream();
            using (WordprocessingDocument package = WordprocessingDocument.Create(mem, DocumentFormat.OpenXml.WordprocessingDocumentType.Document, true))
            {
                result.CreateParts(package,model);
            }
            return mem;
        }
    }
}