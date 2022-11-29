using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class Email
    {
        public Email()
        {
            ListEmailDetails = new List<EmailDetails>();
        }
        public string Title { get; set; }
        public string Body { get; set; }
        public List<EmailDetails> ListEmailDetails { get; set; }
        public string EmailFrom { get; set; } = Environment.GetEnvironmentVariable("UserEmail");
    }

    public class EmailDetails
    {
        public string MailTo { get; set; }
        public string LOG { get; set; }
        public StatusSendEmail StatusSendEmai { get; set; }

    }
    public enum StatusSendEmail
    {
        FAIL = 0,
        SUCCESS = 1,
        ISSEND = 2
    }

}
