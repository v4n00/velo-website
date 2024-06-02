import { cn } from '@/lib/utils';

interface SectionProps {
	children: React.ReactNode;
	className?: string;
}

const Section = ({ children, className }: SectionProps) => {
	return <div className={cn('flex justify-center items-center h-screen', className)}>{children}</div>;
};

export default Section;
