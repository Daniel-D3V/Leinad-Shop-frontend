import { createContext, useState } from 'react';
import events from 'events';

interface EventProviderContextProps {
    events: events
}

export const EventProviderContext = createContext<EventProviderContextProps>({} as EventProviderContextProps);

export const EventProvider = ({ children }: { children: React.ReactNode }) => {
    const [eventBus] = useState<events>(new events())

    return (
        <EventProviderContext.Provider value={{ events: eventBus }}>{children}</EventProviderContext.Provider>
    )
}