
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DetectText_GoogleVision.Service.Models.ModelForGoogleAPI
{
    public class ResponseGoogleVision 
    {
        public class Vertex
        {
            public int x { get; set; }
            public int y { get; set; }
        }

        public class BoundingPoly
        {
            public List<Vertex> vertices { get; set; }
        }

        public class TextAnnotation
        {
            public string description { get; set; }
            public BoundingPoly boundingPoly { get; set; }
        }

        public class Respons
        {
            public List<TextAnnotation> textAnnotations { get; set; }
        }

        public class Root
        {
            public List<Respons> responses { get; set; }
        }
    }
}
