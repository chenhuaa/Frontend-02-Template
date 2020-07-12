1+2*3
<MultiplicativeExpression>::=<Number>|
            <Number>"*"<Number>|
            <MultiplicativeExpression>"*"<Number>|
            <Number>"*"<MultiplicativeExpression>|
            <MultiplicativeExpression>"*"<MultiplicativeExpression>|
            
<DivisionExpression>::=＜Number>|
            <Number>"/"<Number>|
            <DivisionExpression>"/"<Number>|
            <Number>"/"<DivisionExpression>|
            <DivisionExpression>"/"<DivisionExpression>|
            
<SubtractionExpression>::=＜Number>|
            <Number>”-”<Number>|
            <SubtractionExpression>”-”<Number>|
            <Number>”-”<SubtractionExpression>|
            <SubtractionExpression>”-”<SubtractionExpression>|

<AddtiveExpression>::=＜Number>|
            <Number>"+"<Number>|
            <AddtiveExpression>"+"<Number>|
            <Number>"+"<AddtiveExpression>|
            <AddtiveExpression>"+"<AddtiveExpression>|
            