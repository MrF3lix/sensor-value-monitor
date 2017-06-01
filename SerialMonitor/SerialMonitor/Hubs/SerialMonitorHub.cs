using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SerialMonitor.Hubs
{
    [HubName("SerialMonitor")]
    public class SerialMonitorHub : Hub
    {
        public void Send(string message)
        {
            Clients.All.sendMessage(message);
        }
    }
}