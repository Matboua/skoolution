import { MailerService as mailer } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerService {
    constructor(private readonly mailService: mailer) { }
    sendMail(Resever: string) {
        const message = `<dev style="margin: 0; padding: 0; background: linear-gradient(to bottom right, #eff6ff, #e0e7ff); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 2.5rem 1rem;">
                            <div style="max-width: 28rem; width: 100%; background-color: #ffffff; border-radius: 0.75rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); overflow: hidden;">
                                <!-- Header Section with Icon -->
                                <div style="padding: 2rem; text-align: center; background: linear-gradient(to right, #34d399, #14b8a6); border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem; color: #ffffff;">
                                    <!-- Lock icon using inline SVG (from Lucide icons) -->
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: auto; margin-right: auto; margin-bottom: 1rem; filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07));">
                                        <circle cx="12" cy="16" r="1"></circle>
                                        <path d="M15 2H9a3 3 0 0 0-3 3v2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2V5a3 3 0 0 0-3-3Zm-3 14h.01"></path>
                                    </svg>
                                    <h1 style="font-size: 2.25rem; font-weight: 800; margin: 0; filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07));">Password Reset</h1>
                                </div>

                                <!-- Content Section -->
                                <div style="padding: 2rem; color: #4b5563;">
                                    <p style="font-size: 1.125rem; line-height: 1.625; margin-bottom: 1rem; color: #1f2937;">
                                        Hello there,
                                    </p>
                                    <p style="font-size: 1rem; line-height: 1.625; margin-bottom: 2rem;">
                                        We've received a request to **reset your password**. To create a new one, simply click the secure button below:
                                    </p>
                                    <div style="text-align: center; margin-top: 2.5rem; margin-bottom: 2.5rem;">
                                        <a href="https://yourwebsite.com/reset-password?token=your-token"
                                           style="display: inline-block; background: linear-gradient(to right, #06b6d4, #2563eb); color: #ffffff; font-weight: 800; font-size: 1.125rem; text-decoration: none; padding: 1rem 2rem; border-radius: 9999px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
                                            Reset Your Password Now
                                        </a>
                                    </div>
                                    <p style="font-size: 0.875rem; line-height: 1.625; color: #6b7280; font-style: italic; margin-top: 1.5rem;">
                                        If you did not initiate this password reset, please disregard this email. Your account remains secure.
                                    </p>
                                </div>

                                <!-- Footer Section -->
                                <div style="padding: 1.25rem; background: linear-gradient(to right, #34d399, #14b8a6); border-bottom-left-radius: 0.75rem; border-bottom-right-radius: 0.75rem; text-align: center; color: #ffffff; font-size: 0.75rem;">
                                    &copy; 2025 Your Company. All rights reserved.
                                </div>
                                    </div>
                                </div>`
        this.mailService.sendMail({
            from: "somemail@gmail.com",
            to: "elhoubiyoussef@gmail.com",
            subject: "passwoed reset mail",
            html: message
        })
    }
}
