'use client';

interface PageHeaderProps {
  title: string;
  titleAccent?: string;
  description?: string;
  centered?: boolean;
}

const PageHeader = ({
  title,
  titleAccent,
  description,
  centered = false,
}: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid ${
            centered
              ? 'max-w-3xl mx-auto text-center'
              : 'lg:grid-cols-2 gap-8 lg:gap-16 items-end'
          }`}
        >
          <div>
            <h1 className="text-display-md sm:text-display-lg lg:text-display-xl font-bold text-neutral-900 tracking-tight">
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span className="text-primary-500">{titleAccent}</span>
                </>
              )}
            </h1>
          </div>
          {description && (
            <div className={centered ? 'mt-6' : ''}>
              <p className="text-body-lg text-neutral-600">{description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
