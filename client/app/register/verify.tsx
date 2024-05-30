import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const OTPScreen = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (text) => {
    setOtp(text);
  };

  const handleResendCode = () => {
  };
  

  const handleNext = () => {
  };

  const handleBackToLogin = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>OTP Code</Text>

      
      <View style={styles.otpInputContainer}>
        <TextInput
          style={styles.otpInput}
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={handleOtpChange}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={handleOtpChange}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={handleOtpChange}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={handleOtpChange}
        />
      </View>

      <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
        <Text style={styles.resendButtonText}>Tidak menerima pesan apapun?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.resendButton]}
        onPress={handleResendCode}
      >
        <Text style={styles.resendButtonText}>Kirim Ulang Kode</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToLogin}>
          <Text style={styles.backButtonText}>back to login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
  },
  message: {
    marginTop: 10,
    marginBottom: 20,
  },
  resendButton: {
    alignItems: 'center',
  },
  resendButtonText: {
    color: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  backButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
  },
});

export default OTPScreen;
