import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { RoutePath } from './data/siteContent';

const VALID_ROUTES: RoutePath[] = [
  '/',
  '/websites',
  '/flyers-and-print',
  '/ai-videos',
  '/contact',
];

function normalizePath(pathname: string): RoutePath {
  const trimmed = pathname.replace(/\/+$/, '') || '/';
  if (VALID_ROUTES.includes(trimmed as RoutePath)) {
    return trimmed as RoutePath;
  }
  return '/';
}

interface RouterContextValue {
  path: RoutePath;
  preselectedService: string;
  navigate: (
    to: RoutePath,
    options?: { hash?: string; service?: string }
  ) => void;
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  preselectedService: '',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState<RoutePath>(() => {
    const initialPath = normalizePath(window.location.pathname);
    return initialPath;
  });
  const [preselectedService, setPreselectedService] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || '';
  });

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
      const params = new URLSearchParams(window.location.search);
      setPreselectedService(params.get('service') || '');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback(
    (to: RoutePath, options?: { hash?: string; service?: string }) => {
      const search = options?.service
        ? `?service=${encodeURIComponent(options.service)}`
        : '';
      const hash = options?.hash ? `#${options.hash}` : '';
      const nextUrl = `${to}${search}${hash}`;

      if (window.location.pathname + window.location.search !== `${to}${search}`) {
        window.history.pushState({}, '', nextUrl);
      }

      setPath(to);
      setPreselectedService(options?.service || '');

      if (options?.hash) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const el = document.getElementById(options.hash!);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 40);
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    },
    []
  );

  return (
    <RouterContext.Provider value={{ path, preselectedService, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: RoutePath;
  hash?: string;
  service?: string;
}

export function RouteLink({
  to,
  hash,
  service,
  onClick,
  children,
  ...rest
}: NavLinkProps) {
  const { navigate } = useRouter();
  const href = `${to}${service ? `?service=${encodeURIComponent(service)}` : ''}${hash ? `#${hash}` : ''}`;

  return (
    <a
      href={href}
      onClick={(e) => {
        if (
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          e.button !== 0
        ) {
          return;
        }
        e.preventDefault();
        onClick?.(e);
        navigate(to, { hash, service });
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
