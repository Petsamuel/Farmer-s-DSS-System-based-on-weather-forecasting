import React from "react";
import PropTypes from 'prop-types';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function RQProviders({ children }) {
    const [client] = React.useState(
        new QueryClient({
            defaultOptions:
            {
                queries:
                {
                    staleTime: 5000,
                    refetchOnWindowFocus: false
                },
            }
        })
    );

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    );
}

RQProviders.propTypes = {
    children: PropTypes.node.isRequired
};

export default RQProviders;