
using DetectText_GoogleVision.DL.IService;
using DetectText_GoogleVision.Service.Models.ModelForGoogleAPI;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace DetectText_GoogleVision.DL.Services
{
    public class GetValueService : IGetValueService
    {
        //GET FIRST DESCRIPTION FROM JSON RESPONSE
        #region GET FIRST DESCRIPTION FROM JSON RESPONSE
        public string GetFirstDescription(string HtmlResult)
        {
            var descriptionObject = JsonConvert.DeserializeObject<ResponseGoogleVision.Root>(HtmlResult);
            string content = descriptionObject.responses[0].textAnnotations[0].description;
            return content;
        }
        #endregion

        //REGEX
        #region REGEX LOGIC
        // Get string Tax code
        public List<String> RegexGetTaxCode(string content, string pattern)
        {
            List<string> arr = new List<string>();
            Match m = Regex.Match(content, pattern);
            while (m.Success)
            {
                int length = m.Value.Length;
                for (int i = 0; i < length; i++)
                {
                    if (Char.IsDigit(m.Value[i]))
                    {
                        arr.Add(m.Value.Substring(i, m.Value.LastIndexOf('\n') - i));
                        break;
                    }
                }
                m = m.NextMatch();
            }
            return arr;
        }
        //Get Number in String text content
        public List<string> RegexGetNumber(string content, string pattern)
        {
            Regex re = new Regex(pattern);
            string element;
            List<string> arr = new List<string>();
            foreach (Match item in re.Matches(content))
            {
                element = string.Join("", item.ToString().ToCharArray().Where(Char.IsDigit));
                arr.Add(element);
            }
            return arr;
        }

        //Get Number with Serparator Syntax (".",") in String text content
        public List<string> RegexGetNumberWithSeparatorSyntax(string content, string pattern)
        {
            Regex re = new Regex(pattern);
            string element;
            List<string> arr = new List<string>();
            foreach (Match item in re.Matches(content))
            {
                element = item.ToString();
                arr.Add(element);
            }
            return arr;
        }
        public List<string> RegexGetNumberWithSeparatorSyntaxNotDot(string content, string pattern)
        {
            Regex re = new Regex(pattern);
            string element;
            List<string> arr = new List<string>();
            foreach (Match item in re.Matches(content))
            {
                element = string.Join("", item.ToString().ToCharArray().Where(Char.IsDigit));
                arr.Add(element);
            }
            return arr;
        }
        #endregion   

        //Get TaxCode in String text content
        public List<string> ListTaxCode(string HtmlResult)
        {
            string content = GetFirstDescription(HtmlResult);
            string pattern = @"(\n)(\s|)(MST:|Mã số thuế:|mã số thuế:)(\s|)(\d+)(-(\d+))?(\s|)(\n)";
            List<string> value = RegexGetTaxCode(content, pattern);
            return value;
        }

        public List<string> ListTicketNumber(string HtmlResult)
        {
            string content = GetFirstDescription(HtmlResult);
            //string pattern = @"(\n)(\s|)(SHD:|Số hóa đơn:|Số HD:|số hóa đơn:|số:|Số:)(\s|)(\d+)(\s|)(\n)";
            string pattern = @"(\n|\s)\d{7}(\s|\n)";
            List<string> value = RegexGetNumber(content, pattern);
            //List<string> value = RegexGetTaxCode(content, pattern);
            return value;
        }
        public List<string> ListPrice(string HtmlResult)
        {
            string content = GetFirstDescription(HtmlResult);
            //string pattern = @"(\n)(\s|)(Số:|số:|SỐ:|sỐ:)(\s|)(\d+)(\s|)(\n)";
            string pattern = @"(\d{1,3}[\,\.]{1})?(\d{1,3}[\,\.]{1}\d{3})([\,\.]{1}\d{2})?";
            List<string> value = RegexGetNumberWithSeparatorSyntax(content, pattern);
            if (value.Count == 0)
            {
                pattern = @"(\n)(\s|)(Thành tiền:|Số tiền:|Tổng tiền:|Giá:)(\s|)(\d+)(\s|)(\n)";
                value = RegexGetNumberWithSeparatorSyntaxNotDot(content, pattern);
            }
            return value;
        }


        //public List<string> ListPrice(string HtmlResult)
        //{
        //    string content = GetFirstDescription(HtmlResult);
        //    string patternBigger = @"\d{1,10}[\,\.]{1}\d{1,10}";
        //    //string patternBigger = @"(\\n|\s)\d{7}(\s|\\n)";
        //    string pattern = @"\d{1,10}[\,\.]{1}\d{1,10}";
        //    Regex reg = new Regex(pattern);
        //    List<string> valueBigger = RegexGetNumberWithSeparatorSyntax(content, patternBigger);
        //    List<string> listValue = new List<string>();
        //    foreach (var valueItem in valueBigger)
        //    {
        //        Match value = reg.Match(valueItem);            
        //        listValue.Add(value.ToString());
        //    }
        //    return listValue;
        //}
    }
}
