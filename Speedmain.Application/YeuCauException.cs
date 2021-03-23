using System;

namespace Speedmain.Application
{
    public class YeuCauException : Exception
    {
        public YeuCauException() { }
        public YeuCauException(string message) : base(message) { }
        public YeuCauException(string message, Exception inner) : base(message, inner) { }
    }
}
