import { NextResponse } from 'next/server';

export function middleware(req) {
    // Controlla se l'URL inizia con /wp
    if (req.nextUrl.pathname.startsWith('/wp')) {
        // Non fare nulla, lascia che il server di Aruba gestisca la richiesta
        return NextResponse.next();
    }
    // Altrimenti, continua con la normale gestione delle richieste
    return NextResponse.next();
}
