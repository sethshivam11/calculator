import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import CharButton from "@/components/CharButton";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleCalculate = () => {
    try {
      let expression = value;

      expression = expression.replace(/(\d+(\.\d+)?)%/g, (_, num) => {
        return String(parseFloat(num) / 100);
      });

      const result = eval(expression);

      if (typeof result === "number" && isFinite(result)) {
        setValue(String(result));
      } else {
        setValue("Error");
      }
    } catch (error) {
      console.error("Calculation error:", error);
      setValue("Error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <CharButton onPress={() => setValue("")} color="#FFC857">
            C
          </CharButton>
          <CharButton
            onPress={() => setValue((prev) => prev.slice(0, prev.length - 1))}
            color="#FFC857"
          >
            <Feather name="delete" size={30} />
          </CharButton>
          <CharButton
            onPress={() =>
              setValue((prev) => {
                if (prev && !isNaN(Number(prev.slice(prev.length - 1)))) {
                  return prev + "%";
                }
                return prev;
              })
            }
            color="#FFC857"
          >
            <FontAwesome5 name="percentage" size={30} />
          </CharButton>
          <CharButton
            onPress={() =>
              setValue((prev) => {
                if (prev && !isNaN(Number(prev.slice(prev.length - 1)))) {
                  return prev + "/";
                }
                return prev;
              })
            }
            color="#FFC857"
          >
            <FontAwesome5 name="divide" size={30} />
          </CharButton>
        </View>
        <View style={styles.buttonRow}>
          <CharButton
            onPress={() => setValue((prev) => prev + "7")}
            color="#E9724C"
          >
            7
          </CharButton>
          <CharButton
            onPress={() => setValue((prev) => prev + "8")}
            color="#E9724C"
          >
            8
          </CharButton>
          <CharButton
            onPress={() => setValue((prev) => prev + "8")}
            color="#E9724C"
          >
            9
          </CharButton>
          <CharButton
            onPress={() =>
              setValue((prev) => {
                if (prev && !isNaN(Number(prev.slice(prev.length - 1)))) {
                  return prev + "*";
                }
                return prev;
              })
            }
            color="#FFC857"
          >
            <FontAwesome name="remove" size={30} />
          </CharButton>
        </View>
        <View style={styles.buttonRow}>
          <CharButton
            onPress={() => setValue((prev) => prev + "4")}
            color="#E9724C"
          >
            4
          </CharButton>
          <CharButton
            onPress={() => setValue((prev) => prev + "5")}
            color="#E9724C"
          >
            5
          </CharButton>
          <CharButton
            onPress={() => setValue((prev) => prev + "6")}
            color="#E9724C"
          >
            6
          </CharButton>
          <CharButton
            onPress={() =>
              setValue((prev) => {
                if (prev && !isNaN(Number(prev.slice(prev.length - 1)))) {
                  return prev + "+";
                }
                return prev;
              })
            }
            color="#FFC857"
          >
            +
          </CharButton>
        </View>
        <View style={styles.buttonRow}>
          <CharButton
            onPress={() => setValue((prev) => prev + "3")}
            color="#E9724C"
          >
            3
          </CharButton>
          <CharButton
            onPress={() => setValue((prev) => prev + "2")}
            color="#E9724C"
          >
            2
          </CharButton>
          <CharButton
            onPress={() => setValue((prev) => prev + "1")}
            color="#E9724C"
          >
            1
          </CharButton>
          <CharButton
            onPress={() =>
              setValue((prev) => {
                if (prev && !isNaN(Number(prev.slice(prev.length - 1)))) {
                  return prev + "-";
                }
                return prev;
              })
            }
            color="#FFC857"
          >
            -
          </CharButton>
        </View>
        <View style={styles.buttonRow}>
          <CharButton
            onPress={() => setValue((prev) => prev + ".")}
            color="#fff"
          >
            <FontAwesome name="circle" size={10} />
          </CharButton>
          <CharButton
            onPress={() => setValue((prev) => prev + "0")}
            color="#E9724C"
          >
            0
          </CharButton>
          <CharButton
            onPress={handleCalculate}
            color="#2274A5"
            style={{
              flex: 2,
              borderRadius: 20,
            }}
          >
            =
          </CharButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  screen: {
    flex: 0.3,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#F0F3F5",
    width: "100%",
    height: 200,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#131B23",
  },
  text: {
    fontSize: 60,
  },
  buttonContainer: {
    flex: 0.7,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
    gap: 5,
    paddingBottom: 20,
  },
  buttonRow: {
    flex: 1,
    gap: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
  },
});

export default Calculator;
