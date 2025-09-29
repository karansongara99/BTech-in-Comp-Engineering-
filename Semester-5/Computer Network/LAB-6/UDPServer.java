// UDPServer.java

import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class UDPServer {
    public static void main(String[] args) {
        final int PORT = 12345;
        byte[] buffer = new byte[1024];

        try (DatagramSocket serverSocket = new DatagramSocket(PORT)) {
            System.out.println("UDP Server is running on port " + PORT);

            while (true) {
                // Receive packet
                DatagramPacket request = new DatagramPacket(buffer, buffer.length);
                serverSocket.receive(request);

                String clientMessage = new String(request.getData(), 0, request.getLength());
                System.out.println("Received from client: " + clientMessage);

                // Prepare response
                String responseMessage = "Hello Client, I received your message: " + clientMessage;
                byte[] responseData = responseMessage.getBytes();

                // Send response
                DatagramPacket response = new DatagramPacket(
                        responseData,
                        responseData.length,
                        request.getAddress(),
                        request.getPort()
                );
                serverSocket.send(response);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
