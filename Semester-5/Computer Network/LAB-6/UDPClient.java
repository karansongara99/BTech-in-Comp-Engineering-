// UDPClient.java

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class UDPClient {
    public static void main(String[] args) {
        final String SERVER_ADDRESS = "localhost";
        final int SERVER_PORT = 12345;

        try (DatagramSocket clientSocket = new DatagramSocket()) {
            // Message to send
            String message = "Hello Server, this is Client!";
            byte[] sendData = message.getBytes();

            // Send packet
            InetAddress serverIP = InetAddress.getByName(SERVER_ADDRESS);
            DatagramPacket sendPacket = new DatagramPacket(sendData, sendData.length, serverIP, SERVER_PORT);
            clientSocket.send(sendPacket);

            // Receive response
            byte[] receiveBuffer = new byte[1024];
            DatagramPacket receivePacket = new DatagramPacket(receiveBuffer, receiveBuffer.length);
            clientSocket.receive(receivePacket);

            String serverReply = new String(receivePacket.getData(), 0, receivePacket.getLength());
            System.out.println("Received from server: " + serverReply);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
