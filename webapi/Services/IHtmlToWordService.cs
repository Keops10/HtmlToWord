using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Services
{
    public interface IHtmlToWordService
    {
        Task<MemoryStream> CreateHtmlToWord(HtmlToWordModel gelenVeri);
    }
}
