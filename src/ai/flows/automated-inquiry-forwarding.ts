
'use server';

/**
 * @fileOverview A contact form submission handler that prepares and forwards the inquiry to Gmail.
 *
 * - automatedInquiryForwarding - A function that handles the contact form submission and forwards the inquiry.
 * - AutomatedInquiryInput - The input type for the automatedInquiryForwarding function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedInquiryInputSchema = z.object({
  name: z.string().describe('The full name of the user.'),
  phone: z.string().describe('The phone number of the user.'),
  email: z.string().email().describe('The email address of the user.'),
  projectType: z.string().describe('The type of project the user is interested in.'),
  message: z.string().describe('The details of the project the user is inquiring about.'),
});
export type AutomatedInquiryInput = z.infer<typeof AutomatedInquiryInputSchema>;

export async function automatedInquiryForwarding(input: AutomatedInquiryInput): Promise<void> {
  return automatedInquiryForwardingFlow(input);
}

const automatedInquiryForwardingFlow = ai.defineFlow(
  {
    name: 'automatedInquiryForwardingFlow',
    inputSchema: AutomatedInquiryInputSchema,
    outputSchema: z.void(),
  },
  async input => {
    // No LLM call is needed, this flow just structures the server-side logic.
    // The actual URL construction and redirection will be handled on the client
    // after this flow confirms the data is processed on the server.
    return;
  }
);
