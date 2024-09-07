import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFA451",
  },
  topContainer: {
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 40,
    paddingVertical: 64,
  },
  whiteContainer: {
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 64,
  },
  grayContainer: {
    backgroundColor: "#f8f8f8",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 64,
  },
  textHeader: {
    fontSize: 20,
    fontFamily: "BrandonGrotesqueMedium",
  },
  textBold: {
    fontFamily: "BrandonGrotesqueMedium",
  },
  textBrandon: {
    fontFamily: "BrandonGrotesqueRegular",
  },
  textContent: {
    fontSize: 16,
    fontFamily: "BrandonGrotesqueRegular",
  },
  buttonFullWidth: {
    backgroundColor: "#FFA451",
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    paddingVertical: 16,
  },
  buttonTextWhite: {
    color: "white",
    fontFamily: "BrandonGrotesqueMedium",
    fontSize: 18,
  },
  textInput: {
    backgroundColor: "#ddd",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end", // Menempatkan modal di bagian bawah layar
  },
  modalContent: {
    width: "100%", // Lebar penuh
    height: "70%", // Sesuaikan dengan tinggi yang diinginkan
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark background with opacity
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
