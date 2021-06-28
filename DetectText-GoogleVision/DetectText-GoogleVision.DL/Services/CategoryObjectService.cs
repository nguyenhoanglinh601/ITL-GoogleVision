using Alturos.Yolo.Model;
using DetectText_GoogleVision.DL.IService;
using DetectText_GoogleVision.DL.Models;
using DetectText_GoogleVision.Service.Models.ModelForGoogleAPI;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
//using System.Text.Json.Serialization;
using static DetectText_GoogleVision.Service.Models.ModelForGoogleAPI.ResponseGoogleVision;

namespace DetectText_GoogleVision.DL.Services
{
    public class CategoryObjectService : ICategoryObjectService<ResponseGoogleVision.TextAnnotation>
    {
        private readonly IGetValueService _getValueService;
        public CategoryObjectService(IGetValueService getValueService)
        {
            _getValueService = getValueService;
        }

        public List<ResponseGoogleVision.TextAnnotation> GetTextAnnotation(string HtmlResult)
        {
            var textAnnotationObject = JsonConvert.DeserializeObject<ResponseGoogleVision.Root>(HtmlResult);
            List<ResponseGoogleVision.TextAnnotation> content = textAnnotationObject.responses[0].textAnnotations;
            //int test = content[0].boundingPoly.vertices[0].x;
            return content;
        }



        //public List<ResponseGoogleVision.LocalizedObject> test(string HtmlResult)
        //{
        //    var textAnnotationObject = JsonConvert.DeserializeObject<ResponseGoogleVision.Root>(HtmlResult);
        //    List<ResponseGoogleVision.LocalizedObject> content = textAnnotationObject.responses[0].localizedObjects;
        //    //int test = content[0].boundingPoly.vertices[0].x;
        //    return content;
        //}
        public List<ResponseGoogleVision.TextAnnotation> GetItemWithTaxCode(string HtmlResult)
        {
            var result = GetTextAnnotation(HtmlResult);
            List<string> valueResult = _getValueService.ListTaxCode(HtmlResult);
            List<ResponseGoogleVision.TextAnnotation> listTextAnnotations = new List<ResponseGoogleVision.TextAnnotation>();
            foreach (var value in valueResult)
            {

                foreach (var item in result)
                {
                    if (item.description.Equals(value))
                    {
                        listTextAnnotations.Add(item);
                        break;
                    }
                }

            }
            return listTextAnnotations;
        }

        public List<ResponseGoogleVision.TextAnnotation> GetItemWithTicketNumber(string HtmlResult)
        {
            var result = GetTextAnnotation(HtmlResult);
            List<string> valueResult = _getValueService.ListTicketNumber(HtmlResult);
            List<ResponseGoogleVision.TextAnnotation> listTextAnnotations = new List<ResponseGoogleVision.TextAnnotation>();
            foreach (var value in valueResult)
            {

                foreach (var item in result)
                {
                    if (item.description.Equals(value))
                    {
                        listTextAnnotations.Add(item);
                        break;
                    }
                }

            }
            return listTextAnnotations;
        }

        public List<ResponseGoogleVision.TextAnnotation> GetItemWithPrice(string HtmlResult)
        {
            var result = GetTextAnnotation(HtmlResult);
            List<string> valueResult = _getValueService.ListPrice(HtmlResult);
            List<ResponseGoogleVision.TextAnnotation> listTextAnnotations = new List<ResponseGoogleVision.TextAnnotation>();
            foreach (var value in valueResult)
            {

                foreach (var item in result)
                {
                    if (item.description.Equals(value))
                    {
                        listTextAnnotations.Add(item);
                        break;
                    }
                }

            }
            return listTextAnnotations;
        }


        //public List<DistanceOfItems> DistancePriceAndTaxCode(string HtmlResult)
        //{
        //    List<ResponseGoogleVision.TextAnnotation> listTaxCode = GetItemWithTaxCode(HtmlResult);
        //    List<ResponseGoogleVision.TextAnnotation> listPrice = GetItemWithPrice(HtmlResult);
        //    List<DistanceOfItems> listDistance = new List<DistanceOfItems>();
        //    foreach (var taxCode in listTaxCode)
        //    {
        //        int xTaxCode = taxCode.boundingPoly.vertices[0].x;
        //        int yTaxCode = taxCode.boundingPoly.vertices[0].y;
        //        foreach (var price in listPrice)
        //        {
        //            int xPrice = price.boundingPoly.vertices[0].x;
        //            int yPrice = price.boundingPoly.vertices[0].y;
        //            double distance = Math.Pow(xPrice - xTaxCode, 2) + Math.Pow(yPrice - yTaxCode, 2);
        //            DistanceOfItems item = new DistanceOfItems();
        //            item.TaxCode = taxCode.description;
        //            item.Price = price.description;
        //            item.Distance = distance;
        //            listDistance.Add(item);
        //        }
        //    }
        //    return listDistance.Distinct().GroupBy(p => p.TaxCode,
        //                   (key, g) => new DistanceOfItems { TaxCode = key, Price = g.FirstOrDefault(x => x.Distance == g.Min(x => x.Distance))?.Price, Distance = g.Min(x => x.Distance) }).ToList();
        //}
        public List<ListItemsModel> GetListValue(List<ResponseGoogleVision.TextAnnotation> listTaxCode, List<ResponseGoogleVision.TextAnnotation> listTicket, List<ResponseGoogleVision.TextAnnotation> listPrice)
        {
            List<ListItemsModel> listItems = new List<ListItemsModel>();
            foreach (var taxCode in listTaxCode)
            {
                foreach (var ticket in listTicket)
                {
                    foreach (var price in listPrice)
                    {
                        ResponseGoogleVision.TextAnnotation tmp = listPrice.First();

                    }
                }
            }
            return listItems;
        }
        public bool checkInside(List<Vertex> listVertex, ResponseGoogleVision.TextAnnotation vertex)
        {
            if (vertex.boundingPoly.vertices[0].x > listVertex[0].x && vertex.boundingPoly.vertices[2].x < listVertex[2].x && vertex.boundingPoly.vertices[3].y > listVertex[3].y && vertex.boundingPoly.vertices[3].y < listVertex[1].y)
                return true;
            return false;
        }
        public List<ListItemsModel> GetAll(string HtmlResult/*, List<List<Vertex>> listVertexOfObject*/)
        {
            List<ResponseGoogleVision.TextAnnotation> listTaxCode = GetItemWithTaxCode(HtmlResult);
            List<ResponseGoogleVision.TextAnnotation> listTicketNumber = GetItemWithTicketNumber(HtmlResult);
            List<ResponseGoogleVision.TextAnnotation> listPrice = GetItemWithPrice(HtmlResult);
            List<ListItemsModel> listItems = new List<ListItemsModel>();
            ListItemsModel item = new ListItemsModel();
            //foreach (var (listVertex, index) in listVertexOfObject.Select((value, i) => (value, i)))
            //{
            //    // loop taxcode
            //    foreach (var taxcode in listTaxCode)
            //    {
            //        if (checkInside(listVertex, taxcode))
            //        {
            //            item.TaxCode = taxcode.description;
            //            listItems[index] = item;
            //        }
            //    }
            //    // loop ticket
            //    foreach (var ticket in listTicketNumber)
            //    {
            //        if (checkInside(listVertex, ticket))
            //        {
            //            item.TaxCode = ticket.description;
            //            listItems[index] = item;
            //        }
            //    }
            //    // loop price
            //    foreach (var price in listPrice)
            //    {
            //        if (checkInside(listVertex, price))
            //        {
            //            item.TaxCode = price.description;
            //            listItems[index] = item;
            //        }
            //    }
            //}
            if (listTaxCode.Count == 0)
                item.TaxCode = "";
            else
                item.TaxCode = listTaxCode[0].description;
            if (listTicketNumber.Count == 0)
                item.TicketNumber = "";
            else
                item.TicketNumber = listTicketNumber[0].description;
            if (listPrice.Count == 0)
                item.Price = "";
            else
                item.Price = listPrice[listPrice.Count - 1].description;
            listItems.Add(item);

            return listItems;
        }

        //    public List<DistanceOfItems> DistanceTicketNumberAndTaxCode(string HtmlResult)
        //    {
        //        List<ResponseGoogleVision.TextAnnotation> listTaxCode = GetItemWithTaxCode(HtmlResult);
        //        List<ResponseGoogleVision.TextAnnotation> listTicketNumber = GetItemWithTicketNumber(HtmlResult);
        //        List<DistanceOfItems> listDistance = new List<DistanceOfItems>();
        //        foreach (var taxCode in listTaxCode)
        //        {
        //            int xTaxCode = taxCode.boundingPoly.vertices[0].x;
        //            int yTaxCode = taxCode.boundingPoly.vertices[0].y;
        //            foreach (var ticketNumber in listTicketNumber)
        //            {
        //                int xTicketNumber = ticketNumber.boundingPoly.vertices[0].x;
        //                int yTicketNumber = ticketNumber.boundingPoly.vertices[0].y;
        //                double distance = Math.Pow(xTicketNumber - xTaxCode, 2) + Math.Pow(yTicketNumber - yTaxCode, 2);
        //                DistanceOfItems item = new DistanceOfItems();
        //                item.TaxCode = taxCode.description;
        //                item.TicketNumber = ticketNumber.description;
        //                item.Distance = distance;
        //                listDistance.Add(item);
        //            }
        //        }
        //        return listDistance.Distinct().GroupBy(p => p.TaxCode,
        //                      (key, g) => new DistanceOfItems { TaxCode = key, TicketNumber = g.FirstOrDefault(x => x.Distance == g.Min(x => x.Distance))?.TicketNumber, Distance = g.Min(x => x.Distance) }).ToList();
        //    }

        //    public List<ListItems> MergeTwoObject(string HtmlResult)
        //    {
        //        List<DistanceOfItems> distancePriceAndTaxCode = DistancePriceAndTaxCode(HtmlResult);
        //        List<DistanceOfItems> distanceTicketNumberAndTaxCode = DistanceTicketNumberAndTaxCode(HtmlResult);
        //        List<ListItems> listItems = new List<ListItems>();         
        //        var query = from pt in distancePriceAndTaxCode
        //                    join tt in distanceTicketNumberAndTaxCode on pt.TaxCode equals tt.TaxCode
        //                    select new ListItems
        //                    {
        //                        TaxCode = pt.TaxCode,
        //                        Price = pt.Price,
        //                        TicketNumber = tt.TicketNumber,
        //                    };
        //        foreach (var q in query)
        //        {
        //            ListItems l = new ListItems();
        //            l = q;
        //            listItems.Add(l);
        //        }
        //        return listItems;
        //    }
        //}
        public List<List<Vertex>> getCoordinates(List<YoloItem> yoloItems)
        {
            List<List<Vertex>> listVertexOfObject = new List<List<Vertex>>();
            foreach (var item in yoloItems)
            {
                List<Vertex> listVertex = new List<Vertex>();
                Vertex tmp = new Vertex();
                // left
                tmp.x = item.X - (int)item.Width / 2;
                tmp.y = item.Y;
                listVertex.Add(tmp);
                //top
                tmp.x = item.X;
                tmp.y = item.Y + (int)item.Height / 2;
                listVertex.Add(tmp);
                //right
                tmp.x = item.X + (int)item.Width / 2;
                tmp.y = item.Y;
                listVertex.Add(tmp);
                //bot
                tmp.x = item.X;
                tmp.y = item.Y - (int)item.Height / 2;
                listVertex.Add(tmp);
                listVertexOfObject.Add(listVertex);
            }
            return listVertexOfObject;
        }
    }
}
