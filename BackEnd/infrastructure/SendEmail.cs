using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace BackEnd.infrastructure
{
    public static class SendEmail
    {
        public static async Task<Model.Email> SendEmails(Model.Email email)
        {
            foreach (var item in email.listEmialDetails)
            {
                MailMessage message = new MailMessage();
                try
                {

                    SmtpClient smtp = new SmtpClient();
                    message.From = new MailAddress(email.EmailFrom);
                    smtp.Credentials = new NetworkCredential(Environment.GetEnvironmentVariable("UserEmail"),  Environment.GetEnvironmentVariable("PassEmail"));
                    message.To.Add(new MailAddress(item.MailTo));
                    message.Subject = email.Title;
                    message.IsBodyHtml = true; //to make message body as html  
                    message.Body = email.Body;
                    smtp.Port = 587;
                    smtp.Host = "smtp.gmail.com"; //for gmail host  
                    smtp.EnableSsl = true;
                    smtp.UseDefaultCredentials = false;
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtp.Send(message);
                    item.StatusSendEmai = Model.StatusSendEmail.SUCCESS;
                }
                catch (Exception ex)
                {
                    item.LOG = ex.Message.ToString();
                    item.StatusSendEmai = Model.StatusSendEmail.FAIL;
                }
                message.Dispose();
            }
            return email;
        }
    }
}
