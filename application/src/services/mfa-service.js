import { authenticator } from "@otplib/preset-default";
import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";
const ENCRYPTION_KEY =
  process.env.ENCRYPTION_KEY || "very_secret_key_32_chars_long!!!"; // Should be 32 bytes

export const mfaService = {
  /**
   * Encrypts a MFA secret for storage.
   */
  encryptSecret: (secret) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
      ALGORITHM,
      Buffer.from(ENCRYPTION_KEY),
      iv,
    );
    let encrypted = cipher.update(secret);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
  },

  /**
   * Decrypts a MFA secret for use.
   */
  decryptSecret: (encryptedData) => {
    const textParts = encryptedData.split(":");
    const iv = Buffer.from(textParts.shift(), "hex");
    const encryptedText = Buffer.from(textParts.join(":"), "hex");
    const decipher = crypto.createDecipheriv(
      ALGORITHM,
      Buffer.from(ENCRYPTION_KEY),
      iv,
    );
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  },

  /**
   * Generates a TOTP code and time remaining.
   */
  generateCode: (secret) => {
    const code = authenticator.generate(secret);
    const remaining = authenticator.timeRemaining();
    return { code, remaining };
  },

  /**
   * Validates a TOTP code.
   */
  verifyCode: (code, secret) => {
    return authenticator.check(code, secret);
  },
};
