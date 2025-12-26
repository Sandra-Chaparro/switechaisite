import { type FC, useState, useEffect } from "react";
import * as S from "./styled";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

export const Contact: FC = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
    const [isPending, setIsPending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(null);
        setIsPending(true);

        if (!formData.fullname || !formData.email || !formData.message) {
            setStatus({ success: false, message: 'Please fill in all required fields.' });
            setIsPending(false);
            return;
        }

        setStatus({ success: false, message: 'Submitting your form...' });

        // Simulate form submission - replace with your actual API call
        setTimeout(() => {
            setStatus({ success: true, message: 'Message sent successfully!' });
            setIsPending(false);
        }, 2000);
    };

    useEffect(() => {
        if (status?.success) {
            setFormData({ fullname: '', email: '', subject: '', message: '' });
        }
    }, [status?.success]);

    return (
        <S.ContactStyled>
            <S.ContainerStyled>
                <S.ContactBox>
                </S.ContactBox>
                <FadeIn delay={0.3}>
                    <TextBox variant="background-text" bgText="Address">
                        {status?.success ? (
                            <p style={{ 
                                textAlign: 'center', 
                                fontSize: '1.5rem', 
                                fontWeight: '500', 
                                color: '#6366f1',
                                padding: '2rem'
                            }}>
                                {status.message}
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label style={{ marginBottom: '6px', fontSize: '0.875rem', fontWeight: '500', color: '#344054' }}>
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        placeholder="Your name here"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '10px 16px',
                                            border: '1px solid #D0D5DD',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            color: '#374151'
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label style={{ marginBottom: '6px', fontSize: '0.875rem', fontWeight: '500', color: '#344054' }}>
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email address here"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '10px 16px',
                                            border: '1px solid #D0D5DD',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            color: '#374151'
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label style={{ marginBottom: '6px', fontSize: '0.875rem', fontWeight: '500', color: '#344054' }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Your subject here"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '10px 16px',
                                            border: '1px solid #D0D5DD',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            color: '#374151'
                                        }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label style={{ marginBottom: '6px', fontSize: '0.875rem', fontWeight: '500', color: '#344054' }}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Your message here"
                                        rows={7}
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{
                                            width: '100%',
                                            padding: '10px 16px',
                                            border: '1px solid #D0D5DD',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            color: '#374151',
                                            resize: 'vertical',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                </div>

                                {!status?.success && status?.message && (
                                    <p style={{ margin: '8px 0', color: '#dc2626', fontSize: '0.875rem' }}>
                                        {status.message}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    style={{
                                        width: '100%',
                                        padding: '10px 16px',
                                        marginTop: '12px',
                                        backgroundColor: isPending ? '#d1d5db' : '#6366f1',
                                        color: 'white',
                                        fontWeight: '500',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: isPending ? 'not-allowed' : 'pointer',
                                        transition: 'background-color 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isPending) e.currentTarget.style.backgroundColor = '#0046FF';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isPending) e.currentTarget.style.backgroundColor = '#1055C9';
                                    }}
                                >
                                    {isPending ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        )}
                    </TextBox>
                </FadeIn>
            </S.ContainerStyled>
        </S.ContactStyled>
    );
};