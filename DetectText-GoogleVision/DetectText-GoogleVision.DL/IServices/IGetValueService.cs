using System.Collections.Generic;

namespace DetectText_GoogleVision.DL.IService
{
    public interface IGetValueService
    {
        string GetFirstDescription(string HtmlResult);
        List<string> RegexGetNumber(string content, string pattern);
        List<string> RegexGetNumberWithSeparatorSyntax(string content, string pattern);
		List<string> RegexGetNumberWithSeparatorSyntaxNotDot(string content, string pattern);
        List<string> ListTaxCode(string HtmlResult);
        List<string> ListTicketNumber(string HtmlResult);
        List<string> ListPrice(string HtmlResult);

    }
}
