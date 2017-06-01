using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(SerialMonitor.Startup))]
namespace SerialMonitor
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}