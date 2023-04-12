import styled from 'styled-components';


export const Card = styled.div`
    box-sizing: border-box;

    /* Auto layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 16px;

    width: 302px;
    height: 440px;

    /* Border Color/#1 */
    border: 1px solid #E2E5EA;
    border-radius: 8px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;

    margin-right: 15px;
    margin-bottom: 15px;
`;

export const CategoriesCardProduct =  styled.p`
    width: 254px;
    height: 22px;

    /* Heading 5 / Regular */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    /* identical to box height, or 138% */

    /* Text Color/Low Contrast */
    color: #828D9E;


    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const TextNameProduct = styled.p`
    width: 254px;
    height: 56px;

    /* Heading 4 / Medium */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;

    /* or 156% */

    /* Text Color/Normal */
    color: #1E354E;


    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;

export const TextCardPriceProduct = styled.p`
    width: 254px;
    height: 28px;

    /* Heading 4 / SemiBold */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;

    /* identical to box height, or 156% */

    /* Text Color/Normal */
    color: #1E354E;


    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;